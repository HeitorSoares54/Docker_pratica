package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

type TimeResponse struct {
	Timezone string `json:"timezone"`
	DateTime string `json:"datetime"`
}

type TimezoneResponse struct {
	Timezones []string `json:"timezones"`
}

// Lista de timezones comuns
var commonTimezones = []string{
	"UTC",
	"America/New_York",
	"America/Chicago",
	"America/Denver",
	"America/Los_Angeles",
	"America/Sao_Paulo",
	"Europe/London",
	"Europe/Paris",
	"Europe/Berlin",
	"Europe/Rome",
	"Asia/Tokyo",
	"Asia/Shanghai",
	"Asia/Kolkata",
	"Australia/Sydney",
	"Pacific/Auckland",
}

func getTimezones(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	
	response := TimezoneResponse{
		Timezones: commonTimezones,
	}
	
	json.NewEncoder(w).Encode(response)
}

func getCurrentTime(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	
	vars := mux.Vars(r)
	timezone := vars["timezone"]
	
	if timezone == "" {
		http.Error(w, "Timezone is required", http.StatusBadRequest)
		return
	}
	
	// Carrega a localização do timezone
	loc, err := time.LoadLocation(timezone)
	if err != nil {
		http.Error(w, "Invalid timezone", http.StatusBadRequest)
		return
	}
	
	// Obtém o horário atual no timezone especificado
	currentTime := time.Now().In(loc)
	
	response := TimeResponse{
		Timezone: timezone,
		DateTime: currentTime.Format("2006-01-02 15:04:05 MST"),
	}
	
	json.NewEncoder(w).Encode(response)
}

func healthCheck(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"status": "ok"})
}

func main() {
	r := mux.NewRouter()
	
	// Rotas da API
	r.HandleFunc("/health", healthCheck).Methods("GET")
	r.HandleFunc("/timezones", getTimezones).Methods("GET")
	r.HandleFunc("/time/{timezone:.*}", getCurrentTime).Methods("GET")
	
	// Configuração CORS
	c := cors.New(cors.Options{
		AllowedOrigins: []string{"*"},
		AllowedMethods: []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders: []string{"*"},
	})
	
	handler := c.Handler(r)
	
	port := ":8080"
	fmt.Printf("Servidor rodando na porta %s\n", port)
	log.Fatal(http.ListenAndServe(port, handler))
}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface TimeResponse {
  timezone: string;
  datetime: string;
}

interface TimezoneResponse {
  timezones: string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container">
      <div class="card">
        <h1>🌍 Timezone App</h1>
        <p>Selecione um timezone para ver o horário atual</p>
        
        <div class="form-group">
          <label for="timezone">Timezone:</label>
          <select 
            id="timezone" 
            [(ngModel)]="selectedTimezone" 
            [disabled]="loading">
            <option value="">Selecione um timezone...</option>
            <option *ngFor="let tz of timezones" [value]="tz">{{ tz }}</option>
          </select>
        </div>
        
        <button 
          (click)="getCurrentTime()" 
          [disabled]="!selectedTimezone || loading">
          {{ loading ? 'Carregando...' : 'Obter Horário Atual' }}
        </button>
        
        <div *ngIf="currentTime" class="result">
          <h3>Horário Atual</h3>
          <p><strong>Timezone:</strong> {{ currentTime.timezone }}</p>
          <p><strong>Data e Hora:</strong> {{ currentTime.datetime }}</p>
        </div>
        
        <div *ngIf="error" class="error">
          {{ error }}
        </div>
        
        <div *ngIf="loading && !timezones.length" class="loading">
          Carregando timezones...
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'timezone-frontend';
  timezones: string[] = [];
  selectedTimezone: string = '';
  currentTime: TimeResponse | null = null;
  loading: boolean = false;
  error: string = '';
  
  private apiUrl = window.location.hostname === 'localhost' ? 'http://localhost:8080' : 'http://backend:8080';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadTimezones();
  }

  loadTimezones() {
    this.loading = true;
    this.error = '';
    
    this.http.get<TimezoneResponse>(`${this.apiUrl}/timezones`).subscribe({
      next: (response) => {
        this.timezones = response.timezones;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erro ao carregar timezones. Verifique se o backend está rodando.';
        this.loading = false;
        console.error('Erro:', err);
      }
    });
  }

  getCurrentTime() {
    if (!this.selectedTimezone) return;
    
    this.loading = true;
    this.error = '';
    this.currentTime = null;
    
    // Encode the timezone to handle special characters
    const encodedTimezone = encodeURIComponent(this.selectedTimezone);
    
    this.http.get<TimeResponse>(`${this.apiUrl}/time/${encodedTimezone}`).subscribe({
      next: (response) => {
        this.currentTime = response;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erro ao obter horário. Verifique se o timezone é válido.';
        this.loading = false;
        console.error('Erro:', err);
      }
    });
  }
}
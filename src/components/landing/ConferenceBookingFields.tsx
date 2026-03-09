import { useState, useImperativeHandle, forwardRef } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const translations = {
  en: {
    seatsLabel: "Number of Seats",
    seatsPlaceholder: "Select number of seats",
    seatOptions: ["5", "15", "30", "50", "80"],
    dateLabel: "Preferred Date",
    datePlaceholder: "Select a date",
    timeLabel: "Starting Time",
    timePlaceholder: "Select a time",
    durationLabel: "Duration",
    durationPlaceholder: "Select duration",
    durationOptions: [
      { value: "1h", label: "1 hour" },
      { value: "2h", label: "2 hours" },
      { value: "4h", label: "4 hours" },
      { value: "8h", label: "Full day (8h)" },
      { value: "other", label: "Other" },
    ],
    projectorLabel: "Projector / TV",
    microphoneLabel: "Microphone",
    yes: "Yes",
    no: "No",
    extrasLabel: "Extras",
    extras: [
      { value: "after-hours", label: "Outside business hours / Weekend" },
      { value: "coffee-machine", label: "Coffee machine" },
      { value: "catering-coffee", label: "Catering: Coffee break" },
      { value: "catering-snacks", label: "Catering: Snacks & Drinks" },
      { value: "catering-lunch", label: "Catering: Lunch/Dinner" },
    ],
    additionalInfoLabel: "Please provide any additional useful info",
    additionalInfoPlaceholder: "Special requirements, setup preferences, etc.",
  },
  es: {
    seatsLabel: "Número de Asientos",
    seatsPlaceholder: "Selecciona el número de asientos",
    seatOptions: ["5", "15", "30", "50", "80"],
    dateLabel: "Fecha Preferida",
    datePlaceholder: "Selecciona una fecha",
    timeLabel: "Hora de Inicio",
    timePlaceholder: "Selecciona una hora",
    durationLabel: "Duración",
    durationPlaceholder: "Selecciona duración",
    durationOptions: [
      { value: "1h", label: "1 hora" },
      { value: "2h", label: "2 horas" },
      { value: "4h", label: "4 horas" },
      { value: "8h", label: "Día completo (8h)" },
      { value: "other", label: "Otro" },
    ],
    projectorLabel: "Proyector / TV",
    microphoneLabel: "Micrófono",
    yes: "Sí",
    no: "No",
    extrasLabel: "Extras",
    extras: [
      { value: "after-hours", label: "Fuera de horario / Fin de semana" },
      { value: "coffee-machine", label: "Máquina de café" },
      { value: "catering-coffee", label: "Catering: Coffee break" },
      { value: "catering-snacks", label: "Catering: Snacks y Bebidas" },
      { value: "catering-lunch", label: "Catering: Comida/Cena" },
    ],
    additionalInfoLabel: "Proporciona cualquier información adicional útil",
    additionalInfoPlaceholder: "Requisitos especiales, preferencias de montaje, etc.",
  },
  it: {
    seatsLabel: "Numero di Posti",
    seatsPlaceholder: "Seleziona il numero di posti",
    seatOptions: ["5", "15", "30", "50", "80"],
    dateLabel: "Data Preferita",
    datePlaceholder: "Seleziona una data",
    timeLabel: "Ora di Inizio",
    timePlaceholder: "Seleziona un orario",
    durationLabel: "Durata",
    durationPlaceholder: "Seleziona la durata",
    durationOptions: [
      { value: "1h", label: "1 ora" },
      { value: "2h", label: "2 ore" },
      { value: "4h", label: "4 ore" },
      { value: "8h", label: "Giornata intera (8h)" },
      { value: "other", label: "Altro" },
    ],
    projectorLabel: "Proiettore / TV",
    microphoneLabel: "Microfono",
    yes: "Sì",
    no: "No",
    extrasLabel: "Extra",
    extras: [
      { value: "after-hours", label: "Fuori orario / Weekend" },
      { value: "coffee-machine", label: "Macchina del caffè" },
      { value: "catering-coffee", label: "Catering: Coffee break" },
      { value: "catering-snacks", label: "Catering: Snack e Bevande" },
      { value: "catering-lunch", label: "Catering: Pranzo/Cena" },
    ],
    additionalInfoLabel: "Fornisci qualsiasi informazione utile aggiuntiva",
    additionalInfoPlaceholder: "Requisiti speciali, preferenze di allestimento, ecc.",
  },
};

const timeSlots = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
  "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00",
];

interface ConferenceBookingFieldsProps {
  lang: "en" | "es" | "it";
}

export default function ConferenceBookingFields({ lang }: ConferenceBookingFieldsProps) {
  const [seats, setSeats] = useState<string>("");
  const [preferredDate, setPreferredDate] = useState<Date>();
  const [time, setTime] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [projector, setProjector] = useState<boolean | null>(null);
  const [microphone, setMicrophone] = useState<boolean | null>(null);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const t = translations[lang];

  const mutedColor = "text-white/60";
  const inputClass = "mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/30 focus:border-primary";

  const toggleExtra = (value: string) => {
    setSelectedExtras((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const pillClass = (active: boolean) =>
    `font-body text-sm px-4 py-2 rounded-full border transition-all duration-300 ${
      active
        ? "bg-primary text-primary-foreground border-primary"
        : "bg-transparent border-white/20 text-white/60 hover:border-primary/50"
    }`;

  return (
    <div className="space-y-6 transition-all duration-300 animate-in fade-in slide-in-from-top-4">
      {/* Seats */}
      <div>
        <Label className={`font-body text-sm ${mutedColor}`}>{t.seatsLabel}</Label>
        <Select value={seats} onValueChange={setSeats}>
          <SelectTrigger className={`mt-1 bg-white/10 border-white/20 text-white focus:border-primary ${!seats ? "text-white/30" : ""}`}>
            <SelectValue placeholder={t.seatsPlaceholder} />
          </SelectTrigger>
          <SelectContent className="bg-neutral-dark border-white/20 text-white">
            {t.seatOptions.map((opt) => (
              <SelectItem key={opt} value={opt}>{opt}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Date + Time */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label className={`font-body text-sm ${mutedColor}`}>{t.dateLabel}</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                type="button"
                variant="outline"
                className={cn(
                  "w-full mt-1 justify-start text-left font-normal bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white focus:border-primary",
                  !preferredDate && "text-white/30"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {preferredDate ? format(preferredDate, "PPP") : <span>{t.datePlaceholder}</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-neutral-dark border-white/20" align="start">
              <Calendar
                mode="single"
                selected={preferredDate}
                onSelect={setPreferredDate}
                disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                initialFocus
                className={cn("p-3 pointer-events-auto text-white")}
              />
            </PopoverContent>
          </Popover>
        </div>
        <div>
          <Label className={`font-body text-sm ${mutedColor}`}>{t.timeLabel}</Label>
          <Select value={time} onValueChange={setTime}>
            <SelectTrigger className={`mt-1 bg-white/10 border-white/20 text-white focus:border-primary ${!time ? "text-white/30" : ""}`}>
              <SelectValue placeholder={t.timePlaceholder} />
            </SelectTrigger>
            <SelectContent className="bg-neutral-dark border-white/20 text-white max-h-60">
              {timeSlots.map((slot) => (
                <SelectItem key={slot} value={slot}>{slot}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Duration */}
      <div>
        <Label className={`font-body text-sm ${mutedColor}`}>{t.durationLabel}</Label>
        <div className="flex flex-wrap gap-3 mt-2">
          {t.durationOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setDuration(opt.value)}
              className={pillClass(duration === opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projector + Microphone */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <Label className={`font-body text-sm ${mutedColor}`}>{t.projectorLabel}</Label>
          <div className="flex gap-3 mt-2">
            <button type="button" onClick={() => setProjector(true)} className={pillClass(projector === true)}>
              {t.yes}
            </button>
            <button type="button" onClick={() => setProjector(false)} className={pillClass(projector === false)}>
              {t.no}
            </button>
          </div>
        </div>
        <div>
          <Label className={`font-body text-sm ${mutedColor}`}>{t.microphoneLabel}</Label>
          <div className="flex gap-3 mt-2">
            <button type="button" onClick={() => setMicrophone(true)} className={pillClass(microphone === true)}>
              {t.yes}
            </button>
            <button type="button" onClick={() => setMicrophone(false)} className={pillClass(microphone === false)}>
              {t.no}
            </button>
          </div>
        </div>
      </div>

      {/* Extras */}
      <div>
        <Label className={`font-body text-sm ${mutedColor}`}>{t.extrasLabel}</Label>
        <div className="flex flex-wrap gap-3 mt-2">
          {t.extras.map((extra) => (
            <button
              key={extra.value}
              type="button"
              onClick={() => toggleExtra(extra.value)}
              className={pillClass(selectedExtras.includes(extra.value))}
            >
              {extra.label}
            </button>
          ))}
        </div>
      </div>

      {/* Additional Info */}
      <div>
        <Label className={`font-body text-sm ${mutedColor}`}>{t.additionalInfoLabel}</Label>
        <Textarea placeholder={t.additionalInfoPlaceholder} rows={3} className={inputClass} />
      </div>
    </div>
  );
}

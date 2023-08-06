export interface CurrentLocation {
  current: Current
  daily: Daily[]
  hourly: Current[]
  lat: number
  lon: number
  minutely: Minutely[]
  timezone: string
  timezone_offset: number
}

export interface Current {
  clouds: number
  dew_point: number
  dt: number
  feels_like: number
  humidity: number
  pop?: number
  pressure: number
  rain?: number
  sunrise?: number
  sunset?: number
  temp: number
  uvi: number
  visibility: number
  weather: Weather[]
  wind_deg: number
  wind_gust: number
  wind_speed: number
}

export interface Weather {
  description: string
  icon: string
  id: number
  main: string
}

export interface Main {
  clear: string
  clouds: string
  rain: string
}

export interface Daily {
  clouds: number
  dew_point: number
  dt: number
  feels_like: FeelsLike
  humidity: number
  moon_phase: number
  moonrise: number
  moonset: number
  pop: number
  pressure: number
  rain?: number
  sunrise: number
  sunset: number
  temp: Temp
  uvi: number
  weather: Weather[]
  wind_deg: number
  wind_gust: number
  wind_speed: number
}

export interface FeelsLike {
  day: number
  eve: number
  morn: number
  night: number
}

export interface Temp {
  day: number
  eve: number
  max: number
  min: number
  morn: number
  night: number
}

export interface Minutely {
  dt: number
  precipitation: number
}

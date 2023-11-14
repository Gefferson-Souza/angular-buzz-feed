export interface Quizz {
  title: string
  description: string
  questions: Question[]
  results: Record<string, Result>
  observation: string
}

interface Question {
  id: number
  question: string
  options: Option[]
}

interface Option {
  id: number
  name: string
  alias: string
}

interface Result {
  description: string
  profession:Profession[]
}

interface Profession{
  name:string
  link:string
}

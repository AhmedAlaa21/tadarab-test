interface Course {
  title: string;
  category: string;
  image: string;
  trainer_name: string;
  trainer_image: string;
  number_of_lessons: number;
  total_hours_in_seconds: number;
  progress_percentage: number;
}

interface DevelopmentPath {
  title: string;
  image: string;
  learning_outcomes: string[];
  description: string;
  skills: string[];
  courses: Course[];
}

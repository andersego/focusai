type TranslationKeys = {
  // Auth translations
  signIn: string;
  signUp: string;
  email: string;
  password: string;
  name: string;
  createAccount: string;
  signInWithGoogle: string;
  signUpWithGoogle: string;
  alreadyHaveAccount: string;
  noAccount: string;
  invalidCredentials: string;
  authError: string;
  signInError: string;
  signUpError: string;
  emailTaken: string;
  orContinueWith: string;
  signingIn: string;

  // Main page translations
  welcome: string;
  ikigaiTitle: string;
  ikigaiDescription: string;
  ikigaiContent: string;
  goalsTitle: string;
  goalsDescription: string;
  goalsContent: string;

  // App translations
  appDescription: string;
  signInDescription: string;
  progressDescription: string;
  tasksComplete: string;
  daysStreak: string;
  efficiency: string;
  suggestion: string;
  lowEfficiencySuggestion: string;
  mediumEfficiencySuggestion: string;
  highEfficiencySuggestion: string;
  backToTasks: string;
  addReflection: string;
  previousDays: string;
  day: string;
  moodGreat: string;
  moodOkay: string;
  moodChallenging: string;
  noFeedback: string;
  taskCompleted: string;
  taskIncomplete: string;

  // Ikigai translations
  ikigaiLoveQuestion: string;
  ikigaiGoodQuestion: string;
  ikigaiWorldQuestion: string;
  ikigaiPaidQuestion: string;
  ikigaiAnalyzing: string;
  ikigaiResult: string;
  ikigaiResultDescription: string;
  ikigaiSuggestedProfession: string;
  ikigaiConnections: string;
  ikigaiPassion: string;
  ikigaiMission: string;
  ikigaiVocation: string;
  ikigaiProfession: string;
  ikigaiSuggestedPath: string;
  ikigaiStepDescription: string;
  ikigaiAnswerPlaceholder: string;
  createNewIkigai: string;
  maxAttemptsReached: string;
  viewPreviousResults: string;
  back: string;
  next: string;
  finish: string;

  // Goals translations
  setNewGoal: string;
  defineGoalDescription: string;
  whatsYourGoal: string;
  goalPlaceholder: string;
  whenAchieve: string;
  addNewGoal: string;
  yourGoals: string;
  deleteConfirm: string;
  due: string;
  todaysProgress: string;
  completed: string;
  noGoals: string;

  // Tasks translations
  generatingTasks: string;
  completeTasksMessage: string;
  tasksCompleted: string;
  viewProgress: string;
  provideFeedback: string;
  hideFeedback: string;
  showFeedback: string;

  // Feedback translations
  dailyReflection: string;
  howTasksAlign: string;
  howFeelProgress: string;
  thoughtsOnTasks: string;
  shareExperience: string;
  cancel: string;
  submit: string;

  // Dev controls
  currentDay: string;
  nextDay: string;
  resetDays: string;

  // Personal Brand translations
  personalBrandTitle: string;
  personalBrandDescription: string;
  personalBrandContent: string;

  // Coming soon translations
  comingSoon: string;
  featureComingSoon: string;
  loading: string;
}

const en: TranslationKeys = {
  signIn: "Sign In",
  signUp: "Sign Up",
  email: "Email",
  password: "Password",
  name: "Name",
  createAccount: "Create your account",
  signInWithGoogle: "Sign in with Google",
  signUpWithGoogle: "Sign up with Google",
  alreadyHaveAccount: "Already have an account?",
  noAccount: "Don't have an account?",
  invalidCredentials: "Invalid email or password",
  authError: "Authentication error",
  signInError: "Error signing in",
  signUpError: "Error signing up",
  emailTaken: "Email already registered",
  orContinueWith: "or continue with",
  signingIn: "Signing in...",

  welcome: "Welcome",
  ikigaiTitle: "Find Your Ikigai",
  ikigaiDescription: "Discover your life's purpose",
  ikigaiContent: "Explore the intersection of what you love, what you're good at, what the world needs, and what you can be paid for.",
  goalsTitle: "Set Your Goals",
  goalsDescription: "Track your progress and achieve more",
  goalsContent: "Create specific, measurable goals and let AI help you break them down into achievable daily tasks.",

  appDescription: "Your AI-powered goal achievement companion",
  signInDescription: "Welcome back! Sign in to continue",
  progressDescription: "You're making great strides towards your goal!",
  tasksComplete: "Tasks Completed",
  daysStreak: "Days Streak",
  efficiency: "Efficiency",
  suggestion: "Suggestion",
  lowEfficiencySuggestion: "Consider breaking down your tasks into smaller, more manageable pieces.",
  mediumEfficiencySuggestion: "You're doing well! Try to maintain consistency in completing your daily tasks.",
  highEfficiencySuggestion: "Excellent progress! Consider increasing the challenge of your tasks.",
  backToTasks: "Back to Tasks",
  addReflection: "Add Reflection",
  previousDays: "Previous Days",
  day: "Day",
  moodGreat: "Great day",
  moodOkay: "Okay day",
  moodChallenging: "Challenging day",
  noFeedback: "No feedback provided",
  taskCompleted: "Completed",
  taskIncomplete: "Not completed",

  // Ikigai translations
  ikigaiLoveQuestion: "What do you love?",
  ikigaiGoodQuestion: "What are you good at?",
  ikigaiWorldQuestion: "What does the world need?",
  ikigaiPaidQuestion: "What can you be paid for?",
  ikigaiAnalyzing: "Analyzing your ikigai...",
  ikigaiResult: "Your Ikigai Analysis",
  ikigaiResultDescription: "Based on your answers, here's a suggested path",
  ikigaiSuggestedProfession: "Suggested Professional Activity",
  ikigaiConnections: "How It All Connects",
  ikigaiPassion: "Your Passion (Love + Skill)",
  ikigaiMission: "Your Mission (Love + Need)",
  ikigaiVocation: "Your Vocation (Skill + Payment)",
  ikigaiProfession: "Your Profession (Need + Payment)",
  ikigaiSuggestedPath: "How to Get Started",
  ikigaiStepDescription: "Step",
  ikigaiAnswerPlaceholder: "Take your time to reflect and write your thoughts...",
  createNewIkigai: "Create New Ikigai",
  maxAttemptsReached: "Maximum attempts (3) reached",
  viewPreviousResults: "View Previous Results",
  back: "Back",
  next: "Next",
  finish: "Finish",

  // Goals translations
  setNewGoal: "Set New Goal",
  defineGoalDescription: "Define your path to success with a clear, achievable goal.",
  whatsYourGoal: "What's your goal?",
  goalPlaceholder: "e.g., Launch my online course",
  whenAchieve: "When do you want to achieve it?",
  addNewGoal: "Add New Goal",
  yourGoals: "Your Goals",
  deleteConfirm: "Are you sure you want to delete this goal?",
  due: "Due",
  todaysProgress: "Today's Progress",
  completed: "completed",
  noGoals: "No goals yet. Add your first goal above!",

  // Tasks translations
  generatingTasks: "Generating your daily tasks...",
  completeTasksMessage: "Complete these tasks to move closer to your goal",
  tasksCompleted: "tasks completed",
  viewProgress: "View Progress",
  provideFeedback: "Provide Feedback",
  hideFeedback: "Hide Feedback",
  showFeedback: "Show Feedback",

  // Feedback translations
  dailyReflection: "Daily Reflection",
  howTasksAlign: "How did today's tasks align with your goal?",
  howFeelProgress: "How do you feel about today's progress?",
  thoughtsOnTasks: "Any thoughts on today's tasks?",
  shareExperience: "Share your experience or suggestions...",
  cancel: "Cancel",
  submit: "Submit",

  // Dev controls
  currentDay: "Current Day",
  nextDay: "Next Day",
  resetDays: "Reset Days",

  // Personal Brand translations
  personalBrandTitle: "Personal Brand",
  personalBrandDescription: "Build and manage your professional image",
  personalBrandContent: "Create a strong personal brand that reflects your values and helps you stand out in your professional field.",

  // Coming soon translations
  comingSoon: "Coming Soon",
  featureComingSoon: "This feature is coming soon! Stay tuned for updates.",
  loading: "Loading...",
}

const es: TranslationKeys = {
  signIn: "Iniciar Sesión",
  signUp: "Registrarse",
  email: "Correo",
  password: "Contraseña",
  name: "Nombre",
  createAccount: "Crea tu cuenta",
  signInWithGoogle: "Iniciar sesión con Google",
  signUpWithGoogle: "Registrarse con Google",
  alreadyHaveAccount: "¿Ya tienes una cuenta?",
  noAccount: "¿No tienes una cuenta?",
  invalidCredentials: "Correo o contraseña inválidos",
  authError: "Error de autenticación",
  signInError: "Error al iniciar sesión",
  signUpError: "Error al registrarse",
  emailTaken: "El correo ya está registrado",
  orContinueWith: "o continuar con",
  signingIn: "Iniciando sesión...",

  welcome: "Bienvenido",
  ikigaiTitle: "Encuentra Tu Ikigai",
  ikigaiDescription: "Descubre tu propósito de vida",
  ikigaiContent: "Explora la intersección entre lo que amas, lo que haces bien, lo que el mundo necesita y por lo que te pueden pagar.",
  goalsTitle: "Establece Tus Metas",
  goalsDescription: "Sigue tu progreso y logra más",
  goalsContent: "Crea metas específicas y medibles y deja que la IA te ayude a dividirlas en tareas diarias alcanzables.",

  appDescription: "Tu compañero de logros impulsado por IA",
  signInDescription: "¡Bienvenido de nuevo! Inicia sesión para continuar",
  progressDescription: "¡Estás avanzando muy bien hacia tu meta!",
  tasksComplete: "Tareas Completadas",
  daysStreak: "Días Consecutivos",
  efficiency: "Eficiencia",
  suggestion: "Sugerencia",
  lowEfficiencySuggestion: "Considera dividir tus tareas en partes más pequeñas y manejables.",
  mediumEfficiencySuggestion: "¡Lo estás haciendo bien! Trata de mantener la consistencia en completar tus tareas diarias.",
  highEfficiencySuggestion: "¡Excelente progreso! Considera aumentar el desafío de tus tareas.",
  backToTasks: "Volver a Tareas",
  addReflection: "Añadir Reflexión",
  previousDays: "Días Anteriores",
  day: "Día",
  moodGreat: "Buen día",
  moodOkay: "Día regular",
  moodChallenging: "Día difícil",
  noFeedback: "Sin feedback",
  taskCompleted: "Completada",
  taskIncomplete: "No completada",

  // Ikigai translations
  ikigaiLoveQuestion: "¿Qué amas?",
  ikigaiGoodQuestion: "¿En qué eres bueno?",
  ikigaiWorldQuestion: "¿Qué necesita el mundo?",
  ikigaiPaidQuestion: "¿Por qué te pueden pagar?",
  ikigaiAnalyzing: "Analizando tu ikigai...",
  ikigaiResult: "Tu Análisis de Ikigai",
  ikigaiResultDescription: "Basado en tus respuestas, aquí hay un camino sugerido",
  ikigaiSuggestedProfession: "Actividad Profesional Sugerida",
  ikigaiConnections: "Cómo Todo Se Conecta",
  ikigaiPassion: "Tu Pasión (Amor + Habilidad)",
  ikigaiMission: "Tu Misión (Amor + Necesidad)",
  ikigaiVocation: "Tu Vocación (Habilidad + Pago)",
  ikigaiProfession: "Tu Profesión (Necesidad + Pago)",
  ikigaiSuggestedPath: "Cómo Empezar",
  ikigaiStepDescription: "Paso",
  ikigaiAnswerPlaceholder: "Tómate tu tiempo para reflexionar y escribir tus pensamientos...",
  createNewIkigai: "Crear Nuevo Ikigai",
  maxAttemptsReached: "Máximo de intentos (3) alcanzado",
  viewPreviousResults: "Ver Resultados Anteriores",
  back: "Atrás",
  next: "Siguiente",
  finish: "Finalizar",

  // Goals translations
  setNewGoal: "Nueva Meta",
  defineGoalDescription: "Define tu camino hacia el éxito con una meta clara y alcanzable.",
  whatsYourGoal: "¿Cuál es tu meta?",
  goalPlaceholder: "ej., Lanzar mi curso en línea",
  whenAchieve: "¿Para cuándo quieres lograrla?",
  addNewGoal: "Crear Meta",
  yourGoals: "Tus Metas",
  deleteConfirm: "¿Estás seguro de que quieres eliminar esta meta?",
  due: "Fecha límite",
  todaysProgress: "Progreso de Hoy",
  completed: "completado",
  noGoals: "Aún no tienes metas. ¡Crea tu primera meta arriba!",

  // Tasks translations
  generatingTasks: "Generando tus tareas diarias...",
  completeTasksMessage: "Completa estas tareas para acercarte a tu meta",
  tasksCompleted: "tareas completadas",
  viewProgress: "Ver Progreso",
  provideFeedback: "Dar Feedback",
  hideFeedback: "Ocultar Feedback",
  showFeedback: "Mostrar Feedback",

  // Feedback translations
  dailyReflection: "Reflexión Diaria",
  howTasksAlign: "¿Cómo se alinean las tareas de hoy con tu meta?",
  howFeelProgress: "¿Cómo te sientes con el progreso de hoy?",
  thoughtsOnTasks: "¿Qué opinas sobre las tareas de hoy?",
  shareExperience: "Comparte tu experiencia o sugerencias...",
  cancel: "Cancelar",
  submit: "Enviar",

  // Dev controls
  currentDay: "Día Actual",
  nextDay: "Siguiente Día",
  resetDays: "Reiniciar Días",

  // Personal Brand translations
  personalBrandTitle: "Marca Personal",
  personalBrandDescription: "Construye y gestiona tu imagen profesional",
  personalBrandContent: "Crea una marca personal sólida que refleje tus valores y te ayude a destacar en tu campo profesional.",

  // Coming soon translations
  comingSoon: "Próximamente",
  featureComingSoon: "¡Esta función estará disponible pronto! Mantente atento a las actualizaciones.",
  loading: "Cargando...",
}

export const translations = { en, es }
export type Language = keyof typeof translations
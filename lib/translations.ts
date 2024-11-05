export interface TranslationKeys {
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
  ikigaiStepDescription: string;
  ikigaiAnswerPlaceholder: string;
  ikigaiWhatYouLoveToDo: string;
  ikigaiGoodQuestion: string;
  ikigaiWorldQuestion: string;
  ikigaiPaidQuestion: string;
  ikigaiResult: string;
  ikigaiResultDescription: string;
  ikigaiSuggestedProfession: string;
  ikigaiConnections: string;
  ikigaiPassion: string;
  ikigaiMission: string;
  ikigaiVocation: string;
  ikigaiProfession: string;
  ikigaiSuggestedPath: string;
  ikigaiError: string;
  ikigaiErrorDescription: string;
  ikigaiAnalyzing: string;
  
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
  
  // Loading states
  loading: string;
  generatingIkigai: string;
  
  // Navigation and common
  createNewIkigai: string;
  maxAttemptsReached: string;
  viewPreviousResults: string;
  back: string;
  backToHome: string;
  tryAgain: string;
  next: string;
  finish: string;
  viewPreviousIkigais: string;
  cancel: string;
  confirm: string;
  delete: string;
  language: string;

  // Status messages
  featureComingSoon: string;
  underConstruction: string;
  stayTuned: string;
  comingSoon: string;

  // Personal Brand
  personalBrandTitle: string;
  personalBrandDescription: string;
  personalBrandContent: string;


  // Feedback translations
  dailyReflection: string;
  howTasksAlign: string;
  howFeelProgress: string;
  thoughtsOnTasks: string;
  shareExperience: string;
  submit: string;

  // Footer translations
  privacyPolicy: string;
  termsOfService: string;
  allRightsReserved: string;
  footerDescription: string;
  privacyIntro: string;
  privacyIntroText: string;
  dataCollection: string;
  dataCollectionText: string;
  dataSecurity: string;
  dataSecurityText: string;
  contactInfo: string;
  contactInfoText: string;
  termsIntro: string;
  termsIntroText: string;
  userObligations: string;
  userObligationsText: string;
  intellectualProperty: string;
  intellectualPropertyText: string;
  limitations: string;
  limitationsText: string;
}

export const translations = {
  en: {
    // App description
    appName: "FocusAI",
    appDescription: "Your AI-powered goal achievement companion",
    
    // Auth translations
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
  
    // Main page translations
    welcome: "Welcome",
    ikigaiTitle: "Find Your Ikigai",
    ikigaiDescription: "Discover your life's purpose",
    ikigaiContent: "Explore the intersection of what you love, what you're good at, what the world needs, and what you can be paid for.",
    goalsTitle: "Set Your Goals",
    goalsDescription: "Track your progress and achieve more",
    goalsContent: "Create specific, measurable goals and let AI help you break them down into achievable daily tasks.",
  
      // App translations
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
    ikigaiStepDescription: "Step",
    ikigaiAnswerPlaceholder: "Write your answer here...",
    ikigaiWhatYouLoveToDo: "What do you love to do?",
    ikigaiGoodQuestion: "What are you good at?",
    ikigaiWorldQuestion: "What does the world need?",
    ikigaiPaidQuestion: "What can you be paid for?",
    ikigaiResult: "Your Ikigai Analysis",
    ikigaiResultDescription: "Based on your answers, here's your personalized Ikigai analysis",
    ikigaiSuggestedProfession: "Suggested Profession",
    ikigaiConnections: "Your Ikigai Connections",
    ikigaiPassion: "Your Passion",
    ikigaiMission: "Your Mission",
    ikigaiVocation: "Your Vocation",
    ikigaiProfession: "Your Profession",
    ikigaiSuggestedPath: "Suggested Path",
    ikigaiError: "Oops! Something went wrong",
    ikigaiErrorDescription: "We couldn't generate your Ikigai analysis. Please try again.",
    ikigaiAnalyzing: "Analyzing your answers...",
    
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

    // Footer translations
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    allRightsReserved: "All rights reserved.",
    footerDescription: "FocusAI helps you discover your purpose and achieve your goals through AI-powered guidance and daily task management.",

    // Add to English translations
    privacyIntro: "Introduction",
    privacyIntroText: "At FocusAI, we take your privacy seriously. This policy explains how we collect, use, and protect your personal information.",
    dataCollection: "Data Collection",
    dataCollectionText: "We collect information necessary to provide our services, including email, name, and usage data.",
    dataSecurity: "Data Security",
    dataSecurityText: "We implement security measures to protect your data and maintain its confidentiality.",
    contactInfo: "Contact Information",
    contactInfoText: "For privacy-related questions, please contact us through our social media channels.",
    termsIntro: "Introduction",
    termsIntroText: "These terms govern your use of FocusAI services.",
    userObligations: "User Obligations",
    userObligationsText: "Users must comply with these terms and use the service responsibly.",
    intellectualProperty: "Intellectual Property",
    intellectualPropertyText: "All content and features are protected by intellectual property rights.",
    limitations: "Limitations",
    limitationsText: "We provide the service 'as is' and make no warranties about its availability or performance.",
    
    // Loading states
    generatingIkigai: "We're analyzing your answers and generating your Ikigai. This might take a minute...",
    
    // Navigation and common
    createNewIkigai: "Create New Ikigai",
    maxAttemptsReached: "Maximum attempts reached",
    viewPreviousResults: "View Previous Results",
    back: "Back",
    backToHome: "Back to Home",
    tryAgain: "Try Again",
    next: "Next",
    finish: "Finish",
    viewPreviousIkigais: "View Previous Ikigais",
    confirm: "Confirm",
    delete: "Delete",
    language: "Language",
    underConstruction: "Under Construction",
    stayTuned: "Stay tuned!",
    
    

  },
  es: {
    // App description
    appName: "FocusAI",
    appDescription: "Tu compañero de logros impulsado por IA",
    
    // Auth translations

    confirmPassword: "Confirmar Contraseña",
    passwordsDontMatch: "Las contraseñas no coinciden",
    signingUp: "Registrando...",
    haveAccount: "¿Ya tienes una cuenta?",
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
    ikigaiWhatYouLoveToDo: "¿Qué te encanta hacer?",
    ikigaiError: "¡Ups! Algo salió mal",
    ikigaiErrorDescription: "No pudimos generar tu análisis Ikigai. Por favor, inténtalo de nuevo.",
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
  
    // Footer translations
    privacyPolicy: "Política de Privacidad",
    termsOfService: "Términos de Servicio",
    allRightsReserved: "Todos los derechos reservados.",
    footerDescription: "FocusAI te ayuda a descubrir tu propósito y alcanzar tus metas a través de orientación impulsada por IA y gestión diaria de tareas.",
  
    // Add to Spanish translations
    privacyIntro: "Introducción",
    privacyIntroText: "En FocusAI, nos tomamos tu privacidad en serio. Esta política explica cómo recopilamos, usamos y protegemos tu información personal.",
    dataCollection: "Recopilación de Datos",
    dataCollectionText: "Recopilamos la información necesaria para proporcionar nuestros servicios, incluyendo correo electrónico, nombre y datos de uso.",
    dataSecurity: "Seguridad de Datos",
    dataSecurityText: "Implementamos medidas de seguridad para proteger tus datos y mantener su confidencialidad.",
    contactInfo: "Información de Contacto",
    contactInfoText: "Para preguntas relacionadas con la privacidad, contáctanos a través de nuestras redes sociales.",
    termsIntro: "Introducción",
    termsIntroText: "Estos términos rigen tu uso de los servicios de FocusAI.",
    userObligations: "Obligaciones del Usuario",
    userObligationsText: "Los usuarios deben cumplir con estos términos y usar el servicio de manera responsable.",
    intellectualProperty: "Propiedad Intelectual",
    intellectualPropertyText: "Todo el contenido y funciones están protegidos por derechos de propiedad intelectual.",
    limitations: "Limitaciones",
    limitationsText: "Proporcionamos el servicio 'tal cual' y no hacemos garantías sobre su disponibilidad o rendimiento.",
    

    
    
    
    
    
    // Goals translations
    
    deleteGoal: "Eliminar Meta",
    confirmDeleteGoal: "¿Estás seguro de que quieres eliminar esta meta?",
    goalDeleted: "Meta eliminada con éxito",
    
    // Loading states
    
    generatingIkigai: "Estamos analizando tus respuestas y generando tu Ikigai. Esto puede tardar un minuto...",
    
    // Navigation and common
   
    backToHome: "Volver al Inicio",
    tryAgain: "Intentar de Nuevo",
    
    viewPreviousIkigais: "Ver Ikigais Anteriores",
   
    confirm: "Confirmar",
    delete: "Eliminar",
    language: "Idioma",

    // Status messages
    
    underConstruction: "En Construcción",
    stayTuned: "¡Mantente atento!",
    
    

  }
}
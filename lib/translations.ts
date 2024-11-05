export interface TranslationKeys {
  // App description
  appName: string;
  appDescription: string;
  
  // Auth translations
  name: string;
  signInDescription: string;
  signUpDescription: string;
  createAccount: string;
  invalidCredentials: string;
  signInError: string;
  signUpError: string;
  email: string;
  password: string;
  confirmPassword: string;
  passwordsDontMatch: string;
  signIn: string;
  signUp: string;
  signingIn: string;
  signingUp: string;
  signInWithGoogle: string;
  signUpWithGoogle: string;
  orContinueWith: string;
  noAccount: string;
  haveAccount: string;
  alreadyHaveAccount: string;
  
  // Ikigai translations
  ikigaiTitle: string;
  ikigaiDescription: string;
  ikigaiContent: string;
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
  deleteGoal: string;
  confirmDeleteGoal: string;
  goalDeleted: string;
  
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

  // Goals
  goalsTitle: string;
  goalsDescription: string;
  goalsContent: string;

  // App translations
  welcome: string;
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
    name: "Name",
    signInDescription: "Welcome back! Please sign in to continue.",
    signUpDescription: "Create an account to get started.",
    createAccount: "Create Account",
    invalidCredentials: "Invalid email or password",
    signInError: "An error occurred during sign in",
    signUpError: "An error occurred during sign up",
    email: "Email",
    password: "Password",
    confirmPassword: "Confirm Password",
    passwordsDontMatch: "Passwords don't match",
    signIn: "Sign In",
    signUp: "Sign Up",
    signingIn: "Signing In...",
    signingUp: "Signing Up...",
    signInWithGoogle: "Sign in with Google",
    signUpWithGoogle: "Sign up with Google",
    orContinueWith: "Or continue with",
    noAccount: "Don't have an account?",
    haveAccount: "Already have an account?",
    alreadyHaveAccount: "Already have an account?",
    
    // Ikigai translations
    ikigaiTitle: "Discover Your Ikigai",
    ikigaiDescription: "Find your purpose and path in life",
    ikigaiContent: "Answer four simple questions to discover your life's purpose and ideal career path",
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
    defineGoalDescription: "Define your goal and when you want to achieve it",
    whatsYourGoal: "What's your goal?",
    goalPlaceholder: "Enter your goal here...",
    whenAchieve: "When do you want to achieve it?",
    addNewGoal: "Add New Goal",
    deleteGoal: "Delete Goal",
    confirmDeleteGoal: "Are you sure you want to delete this goal?",
    goalDeleted: "Goal deleted successfully",
    
    // Loading states
    loading: "Loading...",
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
    cancel: "Cancel",
    confirm: "Confirm",
    delete: "Delete",
    language: "Language",

    // Status messages
    featureComingSoon: "Feature Coming Soon",
    underConstruction: "Under Construction",
    stayTuned: "Stay tuned!",
    comingSoon: "Coming Soon",

    // Personal Brand
    personalBrandTitle: "Build Your Personal Brand",
    personalBrandDescription: "Create and grow your professional presence",
    personalBrandContent: "Develop your unique personal brand and stand out in your field",

    // Goals
    goalsTitle: "Set and Track Goals",
    goalsDescription: "Define and achieve your objectives",
    goalsContent: "Create, track, and accomplish your personal and professional goals",

    // App translations
    welcome: "Welcome",
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
    submit: "Submit",

    // Footer translations
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    allRightsReserved: "All rights reserved.",
    footerDescription: "FocusAI helps you discover your purpose and achieve your goals through AI-powered guidance and daily task management.",
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
  },
  es: {
    // App description
    appName: "FocusAI",
    appDescription: "Tu compañero de logros impulsado por IA",
    
    // Auth translations
    name: "Nombre",
    signInDescription: "¡Bienvenido de nuevo! Por favor, inicia sesión para continuar.",
    signUpDescription: "Crea una cuenta para comenzar.",
    createAccount: "Crear Cuenta",
    invalidCredentials: "Email o contraseña inválidos",
    signInError: "Ocurrió un error durante el inicio de sesión",
    signUpError: "Ocurrió un error durante el registro",
    email: "Email",
    password: "Contraseña",
    confirmPassword: "Confirmar Contraseña",
    passwordsDontMatch: "Las contraseñas no coinciden",
    signIn: "Iniciar Sesión",
    signUp: "Registrarse",
    signingIn: "Iniciando Sesión...",
    signingUp: "Registrando...",
    signInWithGoogle: "Iniciar sesión con Google",
    signUpWithGoogle: "Registrarse con Google",
    orContinueWith: "O continuar con",
    noAccount: "¿No tienes una cuenta?",
    haveAccount: "¿Ya tienes una cuenta?",
    alreadyHaveAccount: "¿Ya tienes una cuenta?",
    
    // Ikigai translations
    ikigaiTitle: "Descubre Tu Ikigai",
    ikigaiDescription: "Encuentra tu propósito y camino en la vida",
    ikigaiContent: "Responde cuatro simples preguntas para descubrir tu propósito de vida y carrera ideal",
    ikigaiStepDescription: "Paso",
    ikigaiAnswerPlaceholder: "Escribe tu respuesta aquí...",
    ikigaiWhatYouLoveToDo: "¿Qué te encanta hacer?",
    ikigaiGoodQuestion: "¿En qué eres bueno?",
    ikigaiWorldQuestion: "¿Qué necesita el mundo?",
    ikigaiPaidQuestion: "¿Por qué te pueden pagar?",
    ikigaiResult: "Tu Análisis Ikigai",
    ikigaiResultDescription: "Basado en tus respuestas, aquí está tu análisis Ikigai personalizado",
    ikigaiSuggestedProfession: "Profesión Sugerida",
    ikigaiConnections: "Tus Conexiones Ikigai",
    ikigaiPassion: "Tu Pasión",
    ikigaiMission: "Tu Misión",
    ikigaiVocation: "Tu Vocación",
    ikigaiProfession: "Tu Profesión",
    ikigaiSuggestedPath: "Camino Sugerido",
    ikigaiError: "¡Ups! Algo salió mal",
    ikigaiErrorDescription: "No pudimos generar tu análisis Ikigai. Por favor, inténtalo de nuevo.",
    ikigaiAnalyzing: "Analizando tus respuestas...",
    
    // Goals translations
    setNewGoal: "Establecer Nueva Meta",
    defineGoalDescription: "Define tu meta y cuándo quieres alcanzarla",
    whatsYourGoal: "¿Cuál es tu meta?",
    goalPlaceholder: "Escribe tu meta aquí...",
    whenAchieve: "¿Cuándo quieres alcanzarla?",
    addNewGoal: "Añadir Nueva Meta",
    deleteGoal: "Eliminar Meta",
    confirmDeleteGoal: "¿Estás seguro de que quieres eliminar esta meta?",
    goalDeleted: "Meta eliminada con éxito",
    
    // Loading states
    loading: "Cargando...",
    generatingIkigai: "Estamos analizando tus respuestas y generando tu Ikigai. Esto puede tardar un minuto...",
    
    // Navigation and common
    createNewIkigai: "Crear Nuevo Ikigai",
    maxAttemptsReached: "Máximo de intentos alcanzado",
    viewPreviousResults: "Ver Resultados Anteriores",
    back: "Atrás",
    backToHome: "Volver al Inicio",
    tryAgain: "Intentar de Nuevo",
    next: "Siguiente",
    finish: "Finalizar",
    viewPreviousIkigais: "Ver Ikigais Anteriores",
    cancel: "Cancelar",
    confirm: "Confirmar",
    delete: "Eliminar",
    language: "Idioma",

    // Status messages
    featureComingSoon: "Función Próximamente",
    underConstruction: "En Construcción",
    stayTuned: "¡Mantente atento!",
    comingSoon: "Próximamente",

    // Personal Brand
    personalBrandTitle: "Construye Tu Marca Personal",
    personalBrandDescription: "Crea y haz crecer tu presencia profesional",
    personalBrandContent: "Desarrolla tu marca personal única y destaca en tu campo",

    // Goals
    goalsTitle: "Establece y Sigue Metas",
    goalsDescription: "Define y alcanza tus objetivos",
    goalsContent: "Crea, sigue y logra tus metas personales y profesionales",

    // App translations
    welcome: "Bienvenido",
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
    submit: "Enviar",

    // Footer translations
    privacyPolicy: "Política de Privacidad",
    termsOfService: "Términos de Servicio",
    allRightsReserved: "Todos los derechos reservados.",
    footerDescription: "FocusAI te ayuda a descubrir tu propósito y alcanzar tus metas a través de orientación impulsada por IA y gestión diaria de tareas.",
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
  }
}
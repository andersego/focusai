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

    // Goals
    goalsTitle: "Establece y Sigue Metas",
    goalsDescription: "Define y alcanza tus objetivos",
  }
}
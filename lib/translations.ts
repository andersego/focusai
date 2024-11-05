export interface TranslationKeys {
  // App description
  appName: string;
  appDescription: string;
  
  // Auth translations
  signInDescription: string;
  signUpDescription: string;
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
}

export const translations = {
  en: {
    // App description
    appName: "FocusAI",
    appDescription: "Your AI-powered goal achievement companion",
    
    // Auth translations
    signInDescription: "Welcome back! Please sign in to continue.",
    signUpDescription: "Create an account to get started.",
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
    viewPreviousIkigais: "View Previous Ikigais"
  },
  es: {
    // App description
    appName: "FocusAI",
    appDescription: "Tu compañero de logros impulsado por IA",
    
    // Auth translations
    signInDescription: "¡Bienvenido de nuevo! Por favor, inicia sesión para continuar.",
    signUpDescription: "Crea una cuenta para comenzar.",
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
    
    // Ikigai translations
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
    viewPreviousIkigais: "Ver Ikigais Anteriores"
  }
}
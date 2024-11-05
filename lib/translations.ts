export interface TranslationKeys {
  // Auth translations
  signInDescription: string;
  invalidCredentials: string;
  signInError: string;
  email: string;
  password: string;
  signIn: string;
  signingIn: string;
  signInWithGoogle: string;
  orContinueWith: string;
  noAccount: string;
  signUp: string;

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
    // Auth translations
    signInDescription: "Welcome back! Please sign in to continue.",
    invalidCredentials: "Invalid email or password",
    signInError: "An error occurred during sign in",
    email: "Email",
    password: "Password",
    signIn: "Sign In",
    signingIn: "Signing In...",
    signInWithGoogle: "Sign in with Google",
    orContinueWith: "Or continue with",
    noAccount: "Don't have an account?",
    signUp: "Sign Up",

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
    // Auth translations
    signInDescription: "¡Bienvenido de nuevo! Por favor, inicia sesión para continuar.",
    invalidCredentials: "Email o contraseña inválidos",
    signInError: "Ocurrió un error durante el inicio de sesión",
    email: "Email",
    password: "Contraseña",
    signIn: "Iniciar Sesión",
    signingIn: "Iniciando Sesión...",
    signInWithGoogle: "Iniciar sesión con Google",
    orContinueWith: "O continuar con",
    noAccount: "¿No tienes una cuenta?",
    signUp: "Registrarse",

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
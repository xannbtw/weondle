export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['¡Excelente!', '¡Increible!', '¡Bien Hecho!','¡Sec@!','¡Bakan!','¡La Raja!','¡Impresionante!']
export const GAME_COPIED_MESSAGE = 'Copiado al portapapeles'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'No hay suficientes letras'
export const WORD_NOT_FOUND_MESSAGE = 'Palabra no encontrada'
export const HARD_MODE_ALERT_MESSAGE =
  'El modo difícil solo se puede habilitar al principio!'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `La palabra era ${solution}, weondle`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Debe usar ${guess} en la posición ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Supongo que debe contener ${letter}`
export const ENTER_TEXT = 'Enviar'
export const DELETE_TEXT = 'Borrar'
export const STATISTICS_TITLE = 'Estadísticas individuales'
export const GUESS_DISTRIBUTION_TEXT = 'Tu distribución'
export const NEW_WORD_TEXT = 'Nueva palabra en'
export const SHARE_TEXT = 'COPIAR RESULTADO'
export const SHARE_FAILURE_TEXT =
  'Unable to share the results. This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.'
export const TOTAL_TRIES_TEXT = 'total de jugadas'
export const SUCCESS_RATE_TEXT = 'aciertos'
export const CURRENT_STREAK_TEXT = 'racha actual'
export const BEST_STREAK_TEXT = 'mejor racha'
export const DISCOURAGE_INAPP_BROWSER_TEXT =
  "You are using an embedded browser and may experience problems sharing or saving your results. We encourage you rather to use your device's default browser."

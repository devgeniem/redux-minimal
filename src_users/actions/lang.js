export const SET_LANGUAGE = 'SET_LANGUAGE';

/**
 * Action that switches language.
 * @param Language choice
 */
export function setLanguage(lang) {
  return {
    type: SET_LANGUAGE,
    lang: lang
  };
}
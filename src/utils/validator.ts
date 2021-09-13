import { getChapterData } from './chapter';

/**
 * Validate a chapterId which can be in-valid in 2 cases:
 *
 * 1. if it's a string that is not numeric e.g. "test".
 * 2. if it's a numeric string but lies outside the range 1->114.
 *
 * @param {string} chapterId
 * @returns {boolean}
 */
export const isValidChapterId = (chapterId: string): boolean => {
  const chapterIdNumber = Number(chapterId);
  // if it's not a numeric string or it's numeric but out of the range of chapter 1->114
  if (Number.isNaN(chapterIdNumber) || chapterIdNumber > 114 || chapterIdNumber < 1) {
    return false;
  }
  return true;
};

/**
 * Validate a verseId which can be in-valid in 3 cases:
 *
 * 1. if it's a string that is not numeric e.g. "test".
 * 2. if it's a numeric string but below 1.
 * 3. if it's a numeric string but above the maximum number of verses for the chapter. e.g. verseId 8 for chapterId 1 (Alfatiha) is invalid since it only has 7 verses.
 *
 * @param {string} chapterId the chapter id. We will assume it's valid since we already validated it.
 * @param {string} verseId the verse id being validated.
 * @returns {boolean}
 */
export const isValidVerseId = (chapterId: string, verseId: string): boolean => {
  const verseIdNumber = Number(verseId);
  // is not a valid number, below 1 or above the maximum number of verses for the chapter.
  if (
    Number.isNaN(verseIdNumber) ||
    verseIdNumber < 1 ||
    verseIdNumber > getChapterData(chapterId).versesCount
  ) {
    return false;
  }
  return true;
};

/**
 * Validate a juzId which can be in-valid in 2 cases:
 *
 * 1. if it's a string that is not numeric e.g. "test".
 * 2. if it's a numeric string but lies outside the range 1->30.
 *
 * @param {string} chapterId
 * @returns {boolean}
 */
export const isValidJuzId = (juzId: string): boolean => {
  const juzIdNumber = Number(juzId);
  // if it's not a numeric string or it's numeric but out of the range of chapter 1->30
  if (Number.isNaN(juzIdNumber) || juzIdNumber > 30 || juzIdNumber < 1) {
    return false;
  }
  return true;
};

/**
 * Validate a pageId which can be in-valid in 2 cases:
 *
 * 1. if it's a string that is not numeric e.g. "test".
 * 2. if it's a numeric string but lies outside the range 1->604.
 *
 * @param {string} chapterId
 * @returns {boolean}
 */
export const isValidPageId = (juzId: string): boolean => {
  const pageIdNumber = Number(juzId);
  // if it's not a numeric string or it's numeric but out of the range of chapter 1->604
  if (Number.isNaN(pageIdNumber) || pageIdNumber > 604 || pageIdNumber < 1) {
    return false;
  }
  return true;
};

import { createAction } from 'redux-actions'

export const fetchContents = createAction('fetch contents')

export const changePage = createAction('change page', page => page)
export const submitPage = createAction('submit page', page => page)
export const nextPage = createAction('next page')
export const updateQuestion = createAction('update question', question_text => question_text)
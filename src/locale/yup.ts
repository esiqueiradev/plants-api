import { setLocale } from 'yup';

setLocale({
  mixed: {
    required: 'Campo Obrigatório',
    default: 'Não é válido',
  },
  number: {
    min: 'Deve ser maior ou igual a ${min}',
    max: 'Deve ser menor ou igual a ${max}',
    lessThan: 'Deve ser menor que ${less}',
    moreThan: 'Deve ser maior que ${more}',
    positive: 'Deve ser um número positivo',
    negative: 'Deve ser um número negativo',
    integer: 'Deve ser um número inteiro',
  },
  string: {
    length: 'O tamanho deve ser de ${length} caracteres',
    min: 'O tamanho deve ser pelo menos ${length} caracteres',
    max: 'O tamanho deve ser até ${length} caracteres',
    email: 'E-mail não é válido',
    url: 'Formato de URL inválido',
    uuid: 'Não é um uuid',
  },
  boolean: {
    isValue: 'O valor deve ser de ${value}',
  },
});

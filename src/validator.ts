export function validarChamado(titulo: string): boolean {
  if (!titulo || titulo.trim().length === 0) {
    throw new Error("O título do chamado não pode ser vazio.");
  }

  const tamanho = titulo.trim().length;

  if (tamanho < 5 || tamanho > 100) {
    throw new Error("O título deve possuir entre 5 e 100 caracteres.");
  }

  return true;
}
public interface ILojaService
{
    List<Loja> GetLojas();                       // Método para obter todas as lojas
    Loja GetLojaById(int id);                    // Método para obter uma loja por ID
}

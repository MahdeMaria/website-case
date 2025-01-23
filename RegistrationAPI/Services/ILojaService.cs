public interface ILojaService
{
    List<Loja> GetLojas();
    Loja GetLojaById(int id);                   
    void CreateLoja(Loja loja);                  
    void UpdateLoja(Loja loja);
    void DeleteLoja(int id);                    
}

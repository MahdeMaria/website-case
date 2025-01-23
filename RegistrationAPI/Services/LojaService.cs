public class LojaService : ILojaService
{
    private readonly ApplicationDbContext _context;

    public LojaService(ApplicationDbContext context)
    {
        _context = context;
    }

    public List<Loja> GetLojas()
    {
        return _context.Lojas.ToList();
    }

     public Loja GetLojaById(int id)
    {
        return _context.Lojas.FirstOrDefault(l => l.Id == id);
    }
    
    public void CreateLoja(Loja loja)
    {
        _context.Lojas.Add(loja);
        _context.SaveChanges();
    }

}
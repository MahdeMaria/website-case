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

   
}
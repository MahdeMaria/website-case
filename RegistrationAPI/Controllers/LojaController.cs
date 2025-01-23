using Microsoft.AspNetCore.Mvc;

public class LojaController : ControllerBase
{
    private readonly ILojaService _lojaService;

    public LojaController(ILojaService lojaService)
    {
        _lojaService = lojaService;
    }

    [HttpGet]
    public IActionResult GetLojas()
    {
        var lojas = _lojaService.GetLojas();
        return Ok(lojas);
    }
}

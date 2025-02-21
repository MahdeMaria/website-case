using Microsoft.AspNetCore.Mvc;

namespace RegistrationAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
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

        [HttpGet("{id}")]
        public ActionResult<Loja> GetLojaById(int id)
        {
            var loja = _lojaService.GetLojaById(id);
            if (loja == null)
            {
                return NotFound();
            }
            return Ok(loja);
        }

        [HttpPost]
        public ActionResult CreateLoja([FromBody] Loja loja)
        {
            _lojaService.CreateLoja(loja);
            return CreatedAtAction(nameof(GetLojaById), new { id = loja.Id }, loja);
        }

        [HttpPut("{id}")]
        public ActionResult UpdateLoja(int id, [FromBody] Loja loja)
        {
            if (id != loja.Id)
            {
            return BadRequest();
            }

            _lojaService.UpdateLoja(loja);
            return NoContent();
        }
        
        [HttpDelete("{id}")]
        public ActionResult DeleteLoja(int id)
        {
            var loja = _lojaService.GetLojaById(id);
            if (loja == null)
            {
                return NotFound();
            }

            _lojaService.DeleteLoja(id);
            return NoContent();
        }
}
}
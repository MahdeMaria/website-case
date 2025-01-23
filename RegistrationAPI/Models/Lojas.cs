public class Loja
{
    public int Id { get; set; }
    public string CNPJ { get; set; } = string.Empty;
    public string RazaoSocial { get; set; } = string.Empty;
    public string? NomeFantasia { get; set; }
    public DateTime DataAbertura { get; set; }
    public DateTime? DataEncerrada { get; set; }
    //public string Status { get; set; } = "Em construção";
    public string Telefone { get; set; } = string.Empty;
    public string Logradouro { get; set; } = string.Empty;
    public string Numero { get; set; } = string.Empty;
    public string? Complemento { get; set; }
    public string Bairro { get; set; } = string.Empty;
    public string Cidade { get; set; } = string.Empty;
    public string Estado { get; set; } = string.Empty;
    public string CEP { get; set; } = string.Empty;
    public int? ProprietarioId { get; set; }

    public Usuario? Proprietario { get; set; }
}
package resultclasses;

public class CardexFactura 
{
	private Long codigo;
	private String nombre;
	private String genero;
	private String referencia;
	private Double valor;
	
	public CardexFactura()
	{
		
	}
	
	public Long getCodigo() 
	{
		return codigo;
	}
	
	public void setCodigo(Long codigo) 
	{
		this.codigo = codigo;
	}
	
	public String getGenero() 
	{
		return genero;
	}
	
	public void setGenero(String genero) 
	{
		this.genero = genero;
	}
	
	public String getReferencia() 
	{
		return referencia;
	}
	
	public void setReferencia(String referencia) 
	{
		this.referencia = referencia;
	}
	
	public Double getValor() 
	{
		return valor;
	}
	
	public void setValor(Double valor) 
	{
		this.valor = valor;
	}

	public String getNombre() 
	{
		return nombre;
	}

	public void setNombre(String nombre) 
	{
		this.nombre = nombre;
	}
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProEventos.API.Models;

namespace ProEventos.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventoController : ControllerBase
    {
       

        public EventoController(ILogger<EventoController> logger)
        {
           
        }

        [HttpGet]
        public List<Evento> Get()
        {
            return new List<Evento>(){

            new Evento(){
               EventoId = 1,
               Tema = "Encontro turma Olhos de águia",
               Local = "Araraquara",
               QtdPessoas = 20,
               Lote = "Primeiro lote",
               DataEvento = DateTime.Now.AddDays(2).ToString()
            },
            new Evento(){
               EventoId = 2,
               Tema = "Encontro turma .Net",
               Local = "Araraquara",
               QtdPessoas = 50,
               Lote = "Segundo lote",
               DataEvento = DateTime.Now.AddDays(2).ToString()
            }



               
           };



        }

        [HttpPost]
        public string Post(){
            return "Estamos no método post.";
        }


        /* [HttpDelete]

        public string Delete(){
            return "Agora Delete";
        } */
        
        [HttpPut("{id}")]

        public string Put(int id)
        {
            return $"Agora put com id = {id}";
        }


        [HttpDelete("{id}")]

        public string Delete(int id)
        {
            return $"Agora Delete com id = {id}";
        }
    }
}

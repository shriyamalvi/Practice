

using AspNetIdentity.WebApi.Infrastructure;
using AspNetIdentity.WebApi.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;



namespace AspNetIdentity.WebApi.Controllers
{
    [RoutePrefix("api/FamilyMember")]
    public class FamilyMemberController : ApiController
    {
        
        private ApplicationDbContext db = new ApplicationDbContext();
        // GET: FamilyMember 
        [Route("GetAllFamilyMember")]
        [HttpGet]
        public IEnumerable<FamilyMember> Get()
        {
            var result = db.FamilyMembers.ToList();
            return result;
        }
        //this api for create record
        [Route("CreateFamilyMemberDetail")]
        [HttpPost]
         public IHttpActionResult CreateFamilyMemberDetail(FamilyMember FMs)
        {
                var result = db.FamilyMembers.Add(FMs);
                db.SaveChanges();
                return Ok(result);
        }
        //api for delete
        [Route("DeleteFamilyMemberDetail")]
        [HttpDelete]
        public IHttpActionResult Delete(int id)
        {
            var result = db.FamilyMembers.Find(id);
            db.FamilyMembers.Remove(result);
            db.SaveChanges();
            return Ok(result);
        }

        //this api also for delete which one is better decide by sir ?

        [Route("DeleteRecord")]
        [HttpDelete]
        public IHttpActionResult DeleteAllFamilyMember(FamilyMember FMs) 
        {
            var FUser = db.FamilyMembers.Where(s => s.EmpId == FMs.EmpId && s.OrgId == FMs.OrgId).FirstOrDefault<FamilyMember>();
            if (FUser != null)
            {
                db.FamilyMembers.Remove(FUser);
                db.SaveChanges();
                return Ok("Family Member Record delete succesfully");
            }
            else
            {
                return NotFound();
            }
        }
        //this api for update
        [Route("UpdateFamilyMemberDetail")]
        [HttpPut]
        public IHttpActionResult UpdateFamilyMemberDetail(FamilyMember FMs)
        {
            var exitingUser = db.FamilyMembers.Where(s => s.EmpId ==FMs.EmpId && s.OrgId==FMs.OrgId).FirstOrDefault<FamilyMember>();
            if (exitingUser!=null)
            {
                db.Entry(exitingUser).CurrentValues.SetValues(exitingUser = FMs);
                return Ok("Detail update succeesfully");
            }
            else
            {
                return NotFound();
            }  
        
        }

    }
}





using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace AspNetIdentity.WebApi.Model
{
    public class FamilyMember
    {
        [Key]
        public int FamilyId { get; set; }
        public int EmpId { get; set; }

        public string NameOfMember{ get; set; }


        
        public string FathersName { get; set; }
        public string FOccupation { get; set; }
        public string FOrgnizationName { get; set; }
        public string FDesignation { get; set; }
        public string FEmail { get; set; }
        public string FContactNo { get; set; }
        public string MothersName { get; set; }
        public string MOccupation { get; set; }
        public string MOrgnizationName { get; set; }
        public string MDesignation { get; set; }
        public string MEmail { get; set; }
        public string MContactNo { get; set; }
        public string SpouceName { get; set; }
        public string SpouceOccupation { get; set; }
        public string SpouceOrgnizationName { get; set; }
        public string SpouceDesignation { get; set; }
        public string SpouceEmail { get; set; }
        public string SpouceContactNo { get; set; }
        public string SpouceGender { get; set; }
        public DateTime SpouceDOB { get; set; }
        public int CompanyId { get; set; }
        public int OrgId { get; set; }
    }
}
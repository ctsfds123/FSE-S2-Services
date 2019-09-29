using System;
using System.Collections.Generic;

namespace LoginService.Models
{
    public partial class Employee
    {
        public Employee()
        {
            Trip = new HashSet<Trip>();
        }

        public long Id { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Contactnumber { get; set; }
        public bool? Isadmin { get; set; }
        public string Vehiclename { get; set; }

        public virtual ICollection<Trip> Trip { get; set; }
    }
}

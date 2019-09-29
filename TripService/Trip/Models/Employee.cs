using System;
using System.Collections.Generic;

namespace Trip.Models
{
    public partial class Employee
    {
        public Employee()
        {
            Trip = new HashSet<Trips>();
        }

        public long Id { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Contactnumber { get; set; }
        public bool? Isadmin { get; set; }
        public string Vehiclename { get; set; }

        public virtual ICollection<Trips> Trip { get; set; }
    }
}

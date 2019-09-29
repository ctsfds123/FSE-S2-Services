using System;
using System.Collections.Generic;

namespace LoginService.Models
{
    public partial class Customer
    {
        public Customer()
        {
            Trip = new HashSet<Trip>();
        }

        public long Id { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Contactnumber { get; set; }

        public virtual ICollection<Trip> Trip { get; set; }
    }
}

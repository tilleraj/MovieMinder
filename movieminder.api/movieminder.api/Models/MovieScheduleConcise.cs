using System.Collections.Generic;

namespace movieminder.api.Models
{
    public class MovieScheduleConcise
    {
        public string tmsId { get; set; }
        public string title { get; set; }
        public PreferredImage preferredImage { get; set; }
        public List<Showtime> showtimes { get; set; }
        public string releaseDate { get; set; }
        public string longDescription { get; set; }
        public string shortDescription { get; set; }
        public List<Rating> ratings { get; set; }
        public List<string> advisories { get; set; }
        public string runTime { get; set; }

        public class Caption
        {
            public string content { get; set; }
            public string lang { get; set; }
        }

        public class PreferredImage
        {
            public string uri { get; set; }
        }

        public class Theatre
        {
            public string id { get; set; }
            public string name { get; set; }
        }

        public class Showtime
        {
            public Theatre theatre { get; set; }
            public string dateTime { get; set; }
            public string quals { get; set; }
            public string ticketURI { get; set; }
        }

        public class Rating
        {
            public string body { get; set; }
            public string code { get; set; }
        }

        public class QualityRating
        {
            public string ratingsBody { get; set; }
            public string value { get; set; }
        }

    }
}
﻿using System.Collections.Generic;

namespace movieminder.api.Models
{
    public class SearchResult
    {
        public int hitCount { get; set; }

        public List<Hit> hits { get; set; }

        public class QualityRating
        {
            public string ratingsBody { get; set; }
            public string value { get; set; }
        }

        public class Rating
        {
            public string body { get; set; }
            public string code { get; set; }
        }

        public class Caption
        {
            public string content { get; set; }
            public string lang { get; set; }
        }

        public class PreferredImage
        {
            public string width { get; set; }
            public string height { get; set; }
            public string uri { get; set; }
            public string category { get; set; }
            public string text { get; set; }
            public string primary { get; set; }
            public Caption caption { get; set; }
        }

        public class Program
        {
            public string tmsId { get; set; }
            public string rootId { get; set; }
            public string subType { get; set; }
            public string title { get; set; }
            public int releaseYear { get; set; }
            public string releaseDate { get; set; }
            public string titleLang { get; set; }
            public string descriptionLang { get; set; }
            public string entityType { get; set; }
            public List<string> genres { get; set; }
            public string longDescription { get; set; }
            public string shortDescription { get; set; }
            public List<string> topCast { get; set; }
            public List<string> directors { get; set; }
            public string officialUrl { get; set; }
            public QualityRating qualityRating { get; set; }
            public List<Rating> ratings { get; set; }
            public List<string> advisories { get; set; }
            public string runTime { get; set; }
            public PreferredImage preferredImage { get; set; }
            public string animation { get; set; }
            public string audience { get; set; }
        }

        public class Hit
        {
            public Program program { get; set; }
        }
    }
}
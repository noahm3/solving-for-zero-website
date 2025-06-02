---
layout: layouts/base.njk
title: Spud McBud | Solving for Zero
name: Spud McBud
guestTitle: Chief Innovation Officer at GreenTech Solutions
company: GreenTech Solutions
shortBio: Leading expert in sustainable agriculture and vertical farming technologies, revolutionizing food production systems.
website: https://greentechsolutions.example.com
twitter: https://twitter.com/spudmcbud
linkedin: https://linkedin.com/in/spudmcbud
email: spud@greentechsolutions.example.com
tags: guests
---

<section class="py-12 bg-white">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto">
      
      <!-- Guest Header -->
      <div class="flex flex-col md:flex-row gap-8 mb-12">
        <div class="md:w-1/3">
          {% if photo %}
          <img src="{{ photo }}" alt="{{ name }}" class="w-full rounded-lg shadow-lg">
          {% else %}
          <div class="w-full aspect-square bg-gradient-to-br from-green-400 to-blue-500 rounded-lg shadow-lg flex items-center justify-center">
            <span class="text-white text-6xl font-bold">{{ name | first }}</span>
          </div>
          {% endif %}
        </div>
        
        <div class="md:w-2/3">
          <h1 class="text-3xl md:text-4xl font-bold mb-4">{{ name }}</h1>
          <p class="text-xl text-gray-600 mb-4">{{ guestTitle }}</p>
          <p class="text-lg text-gray-700 mb-6">{{ company }}</p>
          
          <!-- Social Links -->
          <div class="flex space-x-4 mb-6">
            {% if website %}
            <a href="{{ website }}" target="_blank" class="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg flex items-center space-x-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd"></path>
              </svg>
              <span>Website</span>
            </a>
            {% endif %}
            
            {% if twitter %}
            <a href="{{ twitter }}" target="_blank" class="bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded-lg flex items-center space-x-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
              <span>Twitter</span>
            </a>
            {% endif %}
            
            {% if linkedin %}
            <a href="{{ linkedin }}" target="_blank" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"></path>
              </svg>
              <span>LinkedIn</span>
            </a>
            {% endif %}
            
            {% if email %}
            <a href="mailto:{{ email }}" class="bg-green-100 hover:bg-green-200 px-4 py-2 rounded-lg flex items-center space-x-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span>Email</span>
            </a>
            {% endif %}
          </div>
        </div>
      </div>

      <!-- Bio Section -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold mb-6">About {{ name }}</h2>
        <div class="prose prose-lg">
          <p>Spud McBud is a visionary leader in sustainable agriculture and climate technology, serving as Chief Innovation Officer at GreenTech Solutions. With over 15 years of experience in agricultural innovation, Spud has been at the forefront of developing cutting-edge vertical farming systems that use 95% less water and 80% less land than traditional farming methods.</p>
          
          <p>Before joining GreenTech Solutions, Spud led research initiatives at several agricultural technology startups and held positions at major agricultural corporations. They hold a Ph.D. in Agricultural Engineering from Stanford University and have published over 30 peer-reviewed papers on sustainable farming practices.</p>
          
          <p>Spud's work focuses on developing scalable solutions for urban agriculture, including automated growing systems, AI-powered crop monitoring, and closed-loop nutrient cycling. Their innovations have helped reduce the carbon footprint of food production while increasing yields and improving food security in urban environments.</p>
          
          <p>When not revolutionizing agriculture, Spud enjoys hiking, cooking with fresh vegetables from their own vertical farm, and mentoring young entrepreneurs in the climate tech space.</p>
        </div>
      </div>

      <!-- Episodes Section -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold mb-6">Episodes Featuring {{ name }}</h2>
        
        {% if episodes %}
        <div class="space-y-4">
          {% for episodeSlug in episodes %}
            {% for episode in collections.episodes %}
              {% if episode.fileSlug == episodeSlug %}
              <div class="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <span class="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">Episode {{ episode.data.episodeNumber }}</span>
                  </div>
                  <div class="flex-grow">
                    <h3 class="text-lg font-semibold mb-2">{{ episode.data.title }}</h3>
                    <p class="text-gray-600 mb-3">{{ episode.data.description }}</p>
                    <div class="flex items-center space-x-4">
                      <span class="text-sm text-gray-500">{{ episode.data.duration }} minutes</span>
                      <a href="{{ episode.url }}" class="text-green-600 hover:text-green-700 font-medium">Listen Now →</a>
                    </div>
                  </div>
                </div>
              </div>
              {% endif %}
            {% endfor %}
          {% endfor %}
        </div>
        {% else %}
        <p class="text-gray-600">No episodes featuring {{ name }} yet. Stay tuned!</p>
        {% endif %}
      </div>

    </div>
  </div>
</section>
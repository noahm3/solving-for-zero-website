---
layout: layouts/base.njk
title: Guests | Solving for Zero
description: Meet the climate solution leaders who have shared their insights on Solving for Zero
---

<section class="py-12 bg-white">
  <div class="container mx-auto px-4">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-3xl md:text-4xl font-bold mb-8">Our Guests</h1>
      
      <div class="prose prose-lg mb-12">
        <p>We're privileged to speak with some of the most innovative minds working on climate solutions today. From policy experts to climate tech entrepreneurs, our guests are driving the transition to a sustainable future.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {% for guest in collections.guests %}
        <div class="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
          <div class="aspect-w-16 aspect-h-9 bg-gray-200">
            {% if guest.data.photo %}
            <img src="{{ guest.data.photo }}" alt="{{ guest.data.name }}" class="w-full h-48 object-cover">
            {% else %}
            <div class="w-full h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
              <span class="text-white text-2xl font-bold">{{ guest.data.name | first }}</span>
            </div>
            {% endif %}
          </div>
          
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">{{ guest.data.name }}</h3>
            <p class="text-gray-600 text-sm mb-3">{{ guest.data.title }}</p>
            <p class="text-gray-700 mb-4">{{ guest.data.shortBio }}</p>
            
            <div class="flex justify-between items-center">
              <a href="{{ guest.url }}" class="text-green-600 hover:text-green-700 font-medium">
                View Profile →
              </a>
              <div class="flex space-x-2">
                {% if guest.data.social.website %}
                <a href="{{ guest.data.social.website }}" class="text-gray-400 hover:text-gray-600" target="_blank">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd"></path>
                  </svg>
                </a>
                {% endif %}
                {% if guest.data.social.twitter %}
                <a href="{{ guest.data.social.twitter }}" class="text-gray-400 hover:text-gray-600" target="_blank">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                {% endif %}
                {% if guest.data.social.linkedin %}
                <a href="{{ guest.data.social.linkedin }}" class="text-gray-400 hover:text-gray-600" target="_blank">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"></path>
                  </svg>
                </a>
                {% endif %}
              </div>
            </div>
          </div>
        </div>
        {% endfor %}
      </div>
    </div>
  </div>
</section>
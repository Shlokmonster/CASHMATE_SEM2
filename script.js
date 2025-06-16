document.addEventListener('DOMContentLoaded', function() {
    // Get all slides and dots
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (!slides.length) return;
    
    let currentSlide = 0;
    
    // Function to show a specific slide
    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => {
            if (slide) {
                slide.style.opacity = '0';
                slide.style.zIndex = '1';
            }
        });
        
        // Show the current slide
        if (slides[index]) {
            slides[index].style.opacity = '1';
            slides[index].style.zIndex = '2';
        }
        
        // Update current slide index
        currentSlide = index;
    }
    
    // Function to go to next slide
    function nextSlide() {
        const nextSlide = (currentSlide + 1) % slides.length;
        showSlide(nextSlide);
    }
    
    // Function to go to previous slide
    function prevSlide() {
        const prevSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prevSlide);
    }
    
    // Event listeners for buttons
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    
    // Initialize the carousel
    showSlide(0);
});


//  carousel of testimonials
const testimonials = [
    {
      quote: "There was no paper work and the process is stress-free. Cashmate made my loan journey super quick",
      name: "Divya R.",
      location: "Indiranagar"
    },
    {
      quote: "I applied for loan during lunch break and got the loan approved in no time. Unbelievable speed!",
      name: "Vikram M.",
      location: "Whitefield"
    },
    {
      quote: "Customer service was top-notch. They answered all my questions without any delay.",
      name: "Sneha A.",
      location: "Jayanagar"
    },
    {
      quote: "Everything was digital, fast and seamless. Great experience from start to finish!",
      name: "Rahul P.",
      location: "MG Road"
    },
    {
      quote: "They didn’t just approve my loan—they made it feel like a breeze!",
      name: "Aarti V.",
      location: "Koramangala"
    }
];

// Initialize testimonials carousel only if the container exists
const carouselContainer = document.getElementById("carousel");
if (carouselContainer) {
    let currentIndex = 0;
    
    function renderTestimonials() {
        carouselContainer.innerHTML = '';
    
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % testimonials.length;
            const t = testimonials[index];
        
            const card = document.createElement('div');
            card.className = 'testimonial-card';
        
            card.innerHTML = `
                <p class="quote">"${t.quote}"</p>
                <h3 class="name">${t.name}</h3>
                <p class="location">${t.location}</p>
            `;
            carouselContainer.appendChild(card);
        }
    }
    
    window.prevSlide = function() {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        renderTestimonials();
    };
    
    window.nextSlide = function() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        renderTestimonials();
    };
    
    // Initial render
    renderTestimonials();
}


//    Overlay functionality

const channelPartnerBtn = document.getElementById('channelPartnerBtn');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');
const form = document.getElementById('channelPartnerForm');

        // Open overlay
        channelPartnerBtn.addEventListener('click', function() {
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        // Close overlay
        function closeOverlay() {
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
            form.reset();
        }

        // Close button click
        closeBtn.addEventListener('click', closeOverlay);

        // Close on overlay background click
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                closeOverlay();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && overlay.classList.contains('active')) {
                closeOverlay();
            }
        });

        // Form submission
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Show success message
            alert('Form submitted successfully!');
            console.log('Form Data:', data);
            
            // Close overlay
            closeOverlay();
        });

        // loans page js

// Input validation function
function validateInput(input) {
    const value = parseFloat(input.value);
    const min = parseFloat(input.min);
    const max = parseFloat(input.max);
    
    if (isNaN(value)) {
        input.value = min || 0;
        return;
    }
    
    if (value < min) {
        input.value = min;
    } else if (value > max) {
        input.value = max;
    }
}

function calculateEMI() {
    // Get input values
    const principal = parseFloat(document.getElementById('loanAmount').value);
    const rate = parseFloat(document.getElementById('interestRate').value) / 100 / 12; // Monthly rate
    const time = parseInt(document.getElementById('loanTerm').value);
    
    // Calculate EMI
    const emi = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
    const totalPayment = emi * time;
    const totalInterest = totalPayment - principal;
    
    // Format numbers with commas
    const formatNumber = num => num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    
    // Update the results
    document.getElementById('monthlyEMI').textContent = '₹' + formatNumber(emi);
    document.getElementById('totalInterest').textContent = '₹' + formatNumber(totalInterest);
    document.getElementById('totalPayment').textContent = '₹' + formatNumber(totalPayment);
    
    // Show results
    document.getElementById('emiResult').style.display = 'block';
    
    // Scroll to results
    document.getElementById('emiResult').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
  
  // Input validation
  function validateInput(input) {
    const min = parseFloat(input.min);
    const max = parseFloat(input.max);
    let value = parseFloat(input.value);
    
    if (isNaN(value)) {
      input.value = min;
      return;
    }
    
    if (value < min) {
      input.value = min;
    } else if (value > max) {
      input.value = max;
    }
  }
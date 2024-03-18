document.getElementById('btn').addEventListener('click', function(event) {
    event.preventDefault();
    const input = document.getElementById('search').value;
    const rslt = document.getElementById('result');
    rslt.innerHTML = '';
  
    if (input.toLowerCase() === 'facebook') {
        const link = document.createElement('a');
        link.href = 'https://web.facebook.com';
        link.textContent = 'Facebook.com';
        rslt.appendChild(link);
      
    } else if (input.toLowerCase() === 'instagram') {
        const link = document.createElement('a');
        link.href = 'https://www.instagram.com';
        link.textContent = 'Instagram.com';
        rslt.appendChild(link);
        
    } else if (input.toLowerCase() === 'tiktok') {
        const link = document.createElement('a');
        link.href = 'https://www.tiktok.com/login';
        link.textContent = 'Tiktok.com';
        rslt.appendChild(link);
      
    } else if (input.toLowerCase() === 'youtube') {
        const link = document.createElement('a');
        link.href = 'https://www.youtube.com';
        link.textContent = 'Youtube.com';
        rslt.appendChild(link);
        
    } else if (input.toLowerCase() === 'github') {
        const link = document.createElement('a');
        link.href = 'https://github.com';
        link.textContent = 'Github.com';
        rslt.appendChild(link);
        
    } else if (input.toLowerCase() === 'ctu') {
        const link = document.createElement('a');
        link.href = 'https://www.ctu.edu.ph/tabogon';
        link.textContent = 'Cebu Technological University';
        rslt.appendChild(link);
        
    } else {
        rslt.textContent = 'No results found.';
    }
  });
document.querySelectorAll('.variant').forEach(item => {
    item.addEventListener('click', function() {
      // Remove active class from all items
      document.querySelectorAll('.variant').forEach(variant => {
        variant.classList.remove('active');
      });
      
      // Add active class to the clicked item
      this.classList.add('active');
    });
  });
  function setActiveTab(event) {
    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Add active class to the clicked tab
    event.currentTarget.classList.add('active');
}
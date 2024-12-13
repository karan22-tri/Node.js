document.getElementById('category').addEventListener('change', async function() {
    const categoryId = this.value;
    const subcategorySelect = document.getElementById('subcategory');
    
    // Clear current options
    subcategorySelect.innerHTML = '<option value="">Select Subcategory</option>';
    
    if (categoryId) {
        try {
            const response = await fetch(`/admin/subcategories/${categoryId}`);
            const subcategories = await response.json();
            
            subcategories.forEach(subcategory => {
                const option = document.createElement('option');
                option.value = subcategory._id;
                option.textContent = subcategory.name;
                subcategorySelect.appendChild(option);
            });
        } catch (error) {
            console.error('Error loading subcategories:', error);
        }
    }
}); 
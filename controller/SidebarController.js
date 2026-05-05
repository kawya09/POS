function navigate(pageId, element) {
    // සියලුම පේජස් හංගන්න
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
        page.classList.remove('active');
    });

    // තෝරාගත් පේජ් එක පෙන්වන්න
    const activePage = document.getElementById('page-' + pageId);
    if (activePage) {
        activePage.style.display = 'block';
        activePage.classList.add('active');
    }

    // Sidebar active color එක මාරු කරන්න
    document.querySelectorAll('.nav-link-custom').forEach(link => link.classList.remove('active'));
    if (element) element.classList.add('active');

    // පිටුවට අදාළ දත්ත ලෝඩ් කරන්න
    if (pageId === 'stock') loadItems();
    if (pageId === 'new-order') loadPOS();
    if (pageId === 'dashboard') updateDashboard();
    if (pageId === 'history') loadHistory();
}
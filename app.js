document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav-item');
  const views = document.querySelectorAll('.view');
  const pageTitle = document.getElementById('page-title');
  const pageSubtitle = document.getElementById('page-subtitle');

  const copy = {
    inbox: ['Incoming Conversations','Turn customer conversations into trackable support workflows.'],
    tickets: ['Tickets','Track support issues created from customer conversations.'],
    logs: ['Integration Logs','Trace API and webhook activity across the workflow.']
  };

  navItems.forEach(item => item.addEventListener('click', () => {
    navItems.forEach(i => i.classList.remove('active'));
    views.forEach(v => v.classList.remove('active-view'));
    item.classList.add('active');
    document.getElementById(item.dataset.view).classList.add('active-view');
    pageTitle.textContent = copy[item.dataset.view][0];
    pageSubtitle.textContent = copy[item.dataset.view][1];
  }));

  const createBtn = document.getElementById('create-ticket');
  const emptyTicket = document.getElementById('empty-ticket');
  const ticketContent = document.getElementById('ticket-content');
  const tableBody = document.getElementById('ticket-table-body');

  createBtn.addEventListener('click', () => {
    emptyTicket.classList.add('hidden');
    ticketContent.classList.remove('hidden');
    createBtn.textContent = 'Ticket Created ✓';
    createBtn.disabled = true;

    if (!document.getElementById('ticket-1024-row')) {
      const row = document.createElement('tr');
      row.id = 'ticket-1024-row';
      row.innerHTML = '<td>#1024</td><td>Acme Corp</td><td>API authentication failure</td><td>High</td><td>Open</td>';
      tableBody.prepend(row);
    }

    const syncBanner = ticketContent.querySelector('.sync-banner');
    syncBanner.textContent = '✓ Ticket created and synced to external helpdesk';
  });

  document.getElementById('open-ai').addEventListener('click', () => {
    document.getElementById('ai-panel').classList.toggle('hidden');
  });

  document.getElementById('simulate-error').addEventListener('click', () => {
    const list = document.getElementById('log-list');
    if (!document.getElementById('simulated-401')) {
      const row = document.createElement('div');
      row.id = 'simulated-401';
      row.className = 'log-row error';
      row.innerHTML = '<span>10:42:17</span><code>POST /external-helpdesk/tickets</code><strong>401 Unauthorized</strong><em>REQ-9F31</em>';
      list.appendChild(row);
    }
    document.getElementById('troubleshoot-box').classList.remove('hidden');
  });
});

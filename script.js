const ctx = document.getElementById('channelChart').getContext('2d');
new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['OTAs', 'Direct Website', 'Corporate', 'Travel Agents', 'GDS'],
    datasets: [{
      data: [58, 20, 13, 6, 3],
      backgroundColor: ['#002F6C', '#0085CA', '#C8A951', '#10B981', '#F59E0B']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'right' },
      title: { display: true, text: 'Radisson Blu — Booking Channel Distribution (%)' }
    }
  }
});

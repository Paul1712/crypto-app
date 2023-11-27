export const formatDate = (date) => {
    let lastDate = new Date(date)
    const lastDateFormat = new Intl.DateTimeFormat('es-BO', {
        timeZone: 'America/La_Paz',
    });
    return lastDateFormat.format(lastDate)
}

export const parseCurrency = (price) => {
    const formatUSD = price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      });
      return formatUSD
}
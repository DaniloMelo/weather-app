
export default function dateFormatter(date: Date) {

    const formattedDate = new Intl.DateTimeFormat('pt-BR', {
        dateStyle: 'long'
    }).format(date)

    return formattedDate
}
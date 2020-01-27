import moment from 'moment'

// January 1st 1970 unix epoch
const getVisibleExpenses = (expenses,{text,sortBy,startDate,endDate})=>{
    return expenses.filter((expense)=>{
        // get moment expense created at
        const createdAtMoment = moment(expense.createdAt)
        // if there is a startdate filter we only take moments before , otherwise match all the expenses regardless of date
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment,'day'):true
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment,'day'):true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        
        return startDateMatch && endDateMatch && textMatch
    }).sort((a,b)=>{
        if(sortBy==='date'){
            return a.createdAt<b.createdAt?1:-1
        }else if(sortBy==='amount'){
            return a.amount<b.amount?1:-1
        }
    })
}

export default getVisibleExpenses
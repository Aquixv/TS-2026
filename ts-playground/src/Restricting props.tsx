type RandomNumbertype = {
    value:number;
}
type positiveNumber = RandomNumbertype &{
isPositive:boolean
isNegative?:never
isZero?:never
}
type Negativenumber = RandomNumbertype & {
    isNegative:boolean
    isPositive?:never
isZero?:never
}
type Zero = RandomNumbertype & {
isZero:boolean
isNegative?:never
    isPositive?:never
}
type RandomNumberProps = positiveNumber| Negativenumber | Zero

export const RandomNumber = ({value, isPositive, isNegative, isZero} :RandomNumberProps) => {
return(
<div>
{value} {isPositive && 'positive'} {isNegative && 'Negative'} {''}
{isZero && 'Zero'}
</div>
)
}
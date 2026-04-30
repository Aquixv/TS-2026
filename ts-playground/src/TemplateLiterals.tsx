type HorizontalPosition = 'left' | 'center' | 'bottom'
type VerticalPosition = 'top' | "center" | 'bottom'

type ToastProps = {
position : 
 | Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'>
 | 'center'
}
export const Toast = ({position}: ToastProps) => {
return(
<div>
    Toast Notification at {position}
</div>
)
}
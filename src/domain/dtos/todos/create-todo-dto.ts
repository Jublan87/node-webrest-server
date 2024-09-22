export class CreateTodoDto {
    private constructor(public text: string) {}

    static create(props: {[key:string]: any}): [string?, CreateTodoDto?] {
        const { text } = props;

        if (!text) {
            return ['Text argument is required'];
        }

        return [undefined, new CreateTodoDto(text)];
    }
}
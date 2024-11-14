/**
 * 挨拶メッセージを管理するオブジェクト。
 */
export const EchoMessages = {
    /**
     * 指定された名前に対する挨拶メッセージを返します。
     *
     * @param name - 挨拶する相手の名前。
     * @returns 挨拶メッセージを含む文字列。
     */
    hello(name: string): string {
        return `Hello, ${name}`;
    },

    /**
     * 指定された名前に対する別れのメッセージを返します。
     *
     * @param name - 別れを告げる相手の名前。
     * @returns 別れのメッセージを含む文字列。
     */
    goodbye(name: string): string {
        return `Goodbye, ${name}`;
    },

    /**
     * 指定された名前に対するおはようメッセージを返します。
     *
     * @param name - おはようを伝える相手の名前。
     * @returns おはようメッセージを含む文字列。
     */
    goodMorning(name: string): string {
        return `GoodMorning, ${name}`;
    },

    /**
     * 指定された名前に対する謝罪のメッセージを返します。
     *
     * @param name - 謝罪する相手の名前。
     * @returns 謝罪のメッセージを含む文字列。
     */
    sorry(name: string): string {
        return `Sorry, ${name}`;
    }
};


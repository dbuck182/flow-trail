import { Input } from "@/components/ui/input";
import { Form, useForm } from "@inertiajs/react";
import { useState } from "react";
import { Message } from "@/types/types";


type ChatWindowProps = {
    project_id: number,
    url: string,
    messages: Message[]
}

export default function ChatWindow({project_id, url, messages}: ChatWindowProps) {

    const { data, setData, post, processing, errors} = useForm({
        message: "",
    });

    const handleSendMessage = (e: React.SubmitEvent) => {
        e.preventDefault();
        post(`/projects/${project_id}/sendMessage`, {
            onSuccess: () => {
                setData('message', '');
            },
            preserveScroll: true
        })
    }

    return (
        <div>
            <h1>Chat</h1>
            <div className="border flex flex-col">
                <div className="p-3 flex flex-col rounded-xl p-4 h-[200px] overflow-y-auto">
                    {messages.map((message: Message) => 
                        <p key={message.id}>{message.userName}: {message.message}</p>
                    )}
                </div>
                <form onSubmit={handleSendMessage}className="border flex flex-row">
                    <input className='border flex-grow-3'type='text'
                        name='message'
                        value={data.message}
                        onChange={e => setData('message', e.target.value)}></input>
                    <button type='submit' className='bg-blue-500 hover:bg-blue-700 rounded font-bold flex-grow-1'>Send Message</button>
                </form>
            </div>
        </div>
    )
}
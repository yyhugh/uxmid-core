/*!
 * This file is part of `services` module. 
 * 
 * Authors:
 *      jason <jasonsoop@gmail.com>
 * 
 * Licensed under the MIT License.
 * Copyright (C) 2010-2017 Uxmid Inc. All rights reserved. 
 */

import { assert } from "chai";
import { WorkerBase, WorkerStateChangedEventArgs } from "dist/uxmid";

export default class HeartbeatWorker extends WorkerBase
{
    public constructor()
    {
        super("heartbeat");
    }
    
    /**
     * 当工作器启动时调用。
     * @protected
     * @override
     * @param  {Array<string>} ...args
     * @returns any
     */
    protected onStart(...args: Array<string>): any
    {
        // todo
    }
    
    /**
     * 当工作器停止时调用。
     * @protected
     * @override
     * @param  {Array<string>} ...args
     * @returns any
     */
    protected onStop(...args: Array<string>): any
    {
        // todo
    }

    /**
     * 当工作器状态发生改变时调用。
     * @protected
     * @override
     * @param  {WorkerStateChangedEventArgs} args 事件参数。
     * @returns void
     */
    protected onStateChanged(args: WorkerStateChangedEventArgs): void
    {
        // todo
    }
}
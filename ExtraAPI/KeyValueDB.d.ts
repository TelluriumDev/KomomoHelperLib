declare abstract class KeyValueDB {
    /**
     * 创建键值对数据库
     * @param path 路径
     */
    static newKeyValueDB(path: string): KeyValueDB

    /**
     * 创建数据库
     * @param path 路径
     * @param createIfMiss 创建如果缺失
     * @param fixIfError 修理如果错误
     * @param bloomFilterBit bloom 过滤器位
     */
    static newKeyValueDB(path: string, createIfMiss: boolean, fixIfError: boolean, bloomFilterBit: number): KeyValueDB

    /**
     * 获取键值
     * @param key 键名
     */
    get(key: string): string

    /**
     * 设置键值对
     * @param key 键名
     * @param value 键值
     */
    set(key: string, value: string): boolean

    /**
     * 删除键值对
     * @param key 键名
     */
    del(key: string): boolean

    /**
     * 键是否存在
     * @param key 键名
     */
    has(key: string): boolean

    /**
     * 数据库是否为空
     */
    empty(): boolean

    /**
     * 数据库所有数据对象
     */
    iter(): Record<string, string>

    /**
     * 释放数据库
     */
    release(): void
}

declare class CommandOutput {
    success(): void

    success(msg: string): void

    error(): void

    error(msg: string): void

    // MCAPI void addMessage(
    //     ::std::string const&                           msgId,
    //     ::std::vector<::CommandOutputParameter> const& params,
    //     ::CommandOutputMessageType                     type
    // ); // TODO: Class
    //   addMessage(const Arguments& args);

    addToResultList(msg: string, element: string): void

    addResultList(msg: string, element: Actor): void

    empty(): boolean

    //  forceOutput(const Arguments& args); // TODO: Class

    //  getData(const Arguments& args); // TODO: Class

    //  getMessages(); // TODO: Class

    //  getType(); // TODO: Class

    // MCAPI void load(
    //     ::CommandOutputType                       type,
    //     int                                       successCount,
    //     ::std::vector<::CommandOutputMessage>&&   messages,
    //     ::std::unique_ptr<::CommandPropertyBag>&& data
    // ); //TODO: Class
    //  load(const Arguments& args);

    setHasPlayerText(): void

    wantsData(): boolean
}
